import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Panic, ReadFile, ReadJsonFile } from '../functions';
import { ManifestLike } from '../types';
import { EDITOR_EXTENSION_UUID } from '../consts';
import { existsSync } from 'node:fs';

const BEHAVIOR_PACKS_DIR = 'behavior_packs';
const SERVER_PROPERTIES_FILE = 'server.properties';

export async function GetEditorExtension(
   basePath: string,
): Promise<{ manifest: ManifestLike; manifest_file: string; entry: string; basePath: string } | null> {
   const behavior_packs = resolve(basePath, BEHAVIOR_PACKS_DIR);
   for (const dir of await readdir(behavior_packs, { withFileTypes: true })) {
      // Skip if not directory [Skip]
      if (!dir.isDirectory()) continue;
      // Pack Base Path
      const base = resolve(behavior_packs, dir.name);

      // Manifest File
      const manifest_file = resolve(base, 'manifest.json');

      console.log(manifest_file);

      // Exist check [Skip]
      if (!existsSync(manifest_file)) continue;

      // Read File Manifest
      const data = await ReadJsonFile<ManifestLike>(manifest_file);

      // Failed To Parse [Skip]
      if (!data || typeof data !== 'object') continue;

      // Unknown format version [Report & Skip]
      if (data.format_version != 2) {
         console.warn('Unknown manifest format version: ' + data.format_version);
         continue;
      }

      const {
         header: { uuid },
         modules,
      } = data;

      // Is not editor [Skip]
      if (EDITOR_EXTENSION_UUID !== uuid) continue;

      // Script Module
      const scriptModule = modules.find(e => e.type === 'script');

      // Check but return as this was the editor extension
      if (!scriptModule?.entry) {
         Panic("Editor extension doesn't has script entry");
         return null;
      }

      // Check if entry exists in the folder
      if (!existsSync(resolve(base, scriptModule.entry))) {
         Panic('Unexpected file name mismatch, file: ' + scriptModule.entry + " doesn't exists for vanilla extension.");
         return null;
      }

      return { manifest: data, basePath: base, manifest_file, entry: resolve(base, scriptModule.entry) };
   }

   Panic('No match for editor behavior pack found!');
   // No Match
   return null;
}
export async function GetServerProperties(basePath: string): Promise<Record<string, string> | null> {
   // Resolve file name
   const server_properties = resolve(basePath, SERVER_PROPERTIES_FILE);

   // Checking for existence
   if (!existsSync(server_properties)) {
      Panic('File not found: ' + server_properties);
      return null;
   }

   const data = await ReadFile(server_properties);

   if (!data) {
      Panic('Failed to read: ' + server_properties);
      return null;
   }

   const text = data.toString();
   const settings: Record<string, string> = {};

   // Remove comments and search for lines with property
   for (const property of text.replace(/#(.+|)/g, '').match(/[a-z-]+=.+/g) ?? []) {
      // get index of the first "=";
      const splitIndex = property.indexOf('=');

      // Check if the index is valid
      if (splitIndex < 0 || splitIndex >= property.length) continue;

      // Extract key and value
      const key = property.slice(0, splitIndex).toLocaleLowerCase().replace(/ +|/g, ''),
         value = property.slice(splitIndex + 1);

      settings[key] = value;
   }
   return settings;
}
export async function GetConfigPermissions(
   basePath: string,
): Promise<{ data: { allowed_modules?: string[] }; permissionsFile: string } | null> {
   const configDir = resolve(basePath, 'config');
   for (const dir of await readdir(configDir, { withFileTypes: true })) {
      // Skip files in config folder as there should be only folders
      if (!dir.isDirectory()) continue;
      // Save Folder as base
      const base = resolve(configDir, dir.name);
      // permissions file
      const permissions_file = resolve(base, 'permissions.json');
      // Exists check
      if (!existsSync(permissions_file)) continue;

      const data = await ReadJsonFile<{ allowed_modules?: string[] }>(permissions_file);

      if (!data) {
         Panic('Failed to load: ' + permissions_file);
         return null;
      }
      if (typeof data !== 'object' || !('allowed_modules' in data)) {
         Panic('Incorrect file format for : ' + permissions_file);
         return null;
      }
      return { data, permissionsFile: permissions_file };
   }
   return null;
}
