import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';
import * as _3e from '@minecraft/server-admin';

// Enums - 2
export enum HttpRequestMethod { Delete = "Delete", Get = "Get", Head = "Head", Post = "Post", Put = "Put"};
export enum PacketId { ActorEventPacket = "ActorEventPacket", ActorPickRequestPacket = "ActorPickRequestPacket", AddActorPacket = "AddActorPacket", AddBehaviorTreePacket = "AddBehaviorTreePacket", AddItemActorPacket = "AddItemActorPacket", AddPaintingPacket = "AddPaintingPacket", AddPlayerPacket = "AddPlayerPacket", AddVolumeEntityPacket = "AddVolumeEntityPacket", AgentActionEventPacket = "AgentActionEventPacket", AgentAnimationPacket = "AgentAnimationPacket", AnimateEntityPacket = "AnimateEntityPacket", AnimatePacket = "AnimatePacket", AnvilDamagePacket = "AnvilDamagePacket", AvailableActorIdentifiersPacket = "AvailableActorIdentifiersPacket", AvailableCommandsPacket = "AvailableCommandsPacket", AwardAchievementPacket = "AwardAchievementPacket", BiomeDefinitionList = "BiomeDefinitionList", BlockActorDataPacket = "BlockActorDataPacket", BlockEventPacket = "BlockEventPacket", BlockPickRequestPacket = "BlockPickRequestPacket", BookEditPacket = "BookEditPacket", BossEventPacket = "BossEventPacket", CameraAimAssistPacket = "CameraAimAssistPacket", CameraAimAssistPresetsPacket = "CameraAimAssistPresetsPacket", CameraInstructionPacket = "CameraInstructionPacket", CameraPacket = "CameraPacket", CameraPresetsPacket = "CameraPresetsPacket", CameraShakePacket = "CameraShakePacket", ChangeDimensionPacket = "ChangeDimensionPacket", ChangeMobPropertyPacket = "ChangeMobPropertyPacket", ChunkRadiusUpdatedPacket = "ChunkRadiusUpdatedPacket", ClientboundCloseFormPacket = "ClientboundCloseFormPacket", ClientboundDebugRendererPacket = "ClientboundDebugRendererPacket", ClientCacheBlobStatusPacket = "ClientCacheBlobStatusPacket", ClientCacheMissResponsePacket = "ClientCacheMissResponsePacket", ClientCacheStatusPacket = "ClientCacheStatusPacket", ClientToServerHandshakePacket = "ClientToServerHandshakePacket", CodeBuilderPacket = "CodeBuilderPacket", CodeBuilderSourcePacket = "CodeBuilderSourcePacket", CommandBlockUpdatePacket = "CommandBlockUpdatePacket", CommandOutputPacket = "CommandOutputPacket", CommandRequestPacket = "CommandRequestPacket", CompletedUsingItemPacket = "CompletedUsingItemPacket", CompressedBiomeDefinitionList = "CompressedBiomeDefinitionList", ContainerClosePacket = "ContainerClosePacket", ContainerOpenPacket = "ContainerOpenPacket", ContainerRegistryCleanupPacket = "ContainerRegistryCleanupPacket", ContainerSetDataPacket = "ContainerSetDataPacket", CorrectPlayerMovePredictionPacket = "CorrectPlayerMovePredictionPacket", CraftingDataPacket = "CraftingDataPacket", CreatePhotoPacket = "CreatePhotoPacket", CreativeContentPacket = "CreativeContentPacket", CurrentStructureFeaturePacket = "CurrentStructureFeaturePacket", DeathInfoPacket = "DeathInfoPacket", DebugInfoPacket = "DebugInfoPacket", DimensionDataPacket = "DimensionDataPacket", DisconnectPacket = "DisconnectPacket", EditorNetworkPacket = "EditorNetworkPacket", EducationSettingsPacket = "EducationSettingsPacket", EduUriResourcePacket = "EduUriResourcePacket", EmoteListPacket = "EmoteListPacket", EmotePacket = "EmotePacket", FeatureRegistryPacket = "FeatureRegistryPacket", GameRulesChangedPacket = "GameRulesChangedPacket", GameTestRequestPacket = "GameTestRequestPacket", GameTestResultsPacket = "GameTestResultsPacket", GuiDataPickItemPacket = "GuiDataPickItemPacket", HurtArmorPacket = "HurtArmorPacket", InteractPacket = "InteractPacket", InventoryContentPacket = "InventoryContentPacket", InventorySlotPacket = "InventorySlotPacket", InventoryTransactionPacket = "InventoryTransactionPacket", ItemComponentPacket = "ItemComponentPacket", ItemStackRequestPacket = "ItemStackRequestPacket", ItemStackResponse = "ItemStackResponse", JigsawStructureDataPacket = "JigsawStructureDataPacket", LabTablePacket = "LabTablePacket", LecternUpdatePacket = "LecternUpdatePacket", LegacyTelemetryEventPacket = "LegacyTelemetryEventPacket", LessonProgressPacket = "LessonProgressPacket", LevelChunkPacket = "LevelChunkPacket", LevelEventGenericPacket = "LevelEventGenericPacket", LevelEventPacket = "LevelEventPacket", LevelSoundEventPacket = "LevelSoundEventPacket", LevelSoundEventPacketV1 = "LevelSoundEventPacketV1", LevelSoundEventPacketV2 = "LevelSoundEventPacketV2", LoginPacket = "LoginPacket", MapCreateLockedCopyPacket = "MapCreateLockedCopyPacket", MapInfoRequestPacket = "MapInfoRequestPacket", MapItemDataPacket = "MapItemDataPacket", MobArmorEquipmentPacket = "MobArmorEquipmentPacket", MobEffectPacket = "MobEffectPacket", MobEquipmentPacket = "MobEquipmentPacket", ModalFormRequestPacket = "ModalFormRequestPacket", ModalFormResponsePacket = "ModalFormResponsePacket", MotionPredictionHintsPacket = "MotionPredictionHintsPacket", MoveActorAbsolutePacket = "MoveActorAbsolutePacket", MoveActorDeltaPacket = "MoveActorDeltaPacket", MovementEffectPacket = "MovementEffectPacket", MovePlayerPacket = "MovePlayerPacket", MultiplayerSettingsPacket = "MultiplayerSettingsPacket", NetworkChunkPublisherUpdatePacket = "NetworkChunkPublisherUpdatePacket", NetworkSettingsPacket = "NetworkSettingsPacket", NetworkStackLatencyPacket = "NetworkStackLatencyPacket", NpcDialoguePacket = "NpcDialoguePacket", NpcRequestPacket = "NpcRequestPacket", OnScreenTextureAnimationPacket = "OnScreenTextureAnimationPacket", OpenSignPacket = "OpenSignPacket", PacketViolationWarningPacket = "PacketViolationWarningPacket", PassengerJumpPacket = "PassengerJumpPacket", PhotoTransferPacket = "PhotoTransferPacket", PlayerActionPacket = "PlayerActionPacket", PlayerArmorDamagePacket = "PlayerArmorDamagePacket", PlayerAuthInputPacket = "PlayerAuthInputPacket", PlayerEnchantOptionsPacket = "PlayerEnchantOptionsPacket", PlayerFogPacket = "PlayerFogPacket", PlayerHotbarPacket = "PlayerHotbarPacket", PlayerInputPacket = "PlayerInputPacket", PlayerListPacket = "PlayerListPacket", PlayerSkinPacket = "PlayerSkinPacket", PlayerStartItemCooldownPacket = "PlayerStartItemCooldownPacket", PlayerToggleCrafterSlotRequestPacket = "PlayerToggleCrafterSlotRequestPacket", PlaySoundPacket = "PlaySoundPacket", PlayStatusPacket = "PlayStatusPacket", PositionTrackingDBClientRequestPacket = "PositionTrackingDBClientRequestPacket", PositionTrackingDBServerBroadcast = "PositionTrackingDBServerBroadcast", PurchaseReceiptPacket = "PurchaseReceiptPacket", RefreshEntitlementsPacket = "RefreshEntitlementsPacket", RemoveActorPacket = "RemoveActorPacket", RemoveObjectivePacket = "RemoveObjectivePacket", RemoveVolumeEntityPacket = "RemoveVolumeEntityPacket", RequestAbilityPacket = "RequestAbilityPacket", RequestChunkRadiusPacket = "RequestChunkRadiusPacket", RequestNetworkSettingsPacket = "RequestNetworkSettingsPacket", RequestPermissionsPacket = "RequestPermissionsPacket", ResourcePackChunkDataPacket = "ResourcePackChunkDataPacket", ResourcePackChunkRequestPacket = "ResourcePackChunkRequestPacket", ResourcePackClientResponsePacket = "ResourcePackClientResponsePacket", ResourcePackDataInfoPacket = "ResourcePackDataInfoPacket", ResourcePacksInfoPacket = "ResourcePacksInfoPacket", ResourcePackStackPacket = "ResourcePackStackPacket", RespawnPacket = "RespawnPacket", ScriptMessagePacket = "ScriptMessagePacket", ServerboundDiagnosticsPacket = "ServerboundDiagnosticsPacket", ServerboundLoadingScreenPacket = "ServerboundLoadingScreenPacket", ServerPlayerPostMovePositionPacket = "ServerPlayerPostMovePositionPacket", ServerSettingsRequestPacket = "ServerSettingsRequestPacket", ServerSettingsResponsePacket = "ServerSettingsResponsePacket", ServerStatsPacket = "ServerStatsPacket", ServerToClientHandshakePacket = "ServerToClientHandshakePacket", SetActorDataPacket = "SetActorDataPacket", SetActorLinkPacket = "SetActorLinkPacket", SetActorMotionPacket = "SetActorMotionPacket", SetCommandsEnabledPacket = "SetCommandsEnabledPacket", SetDefaultGameTypePacket = "SetDefaultGameTypePacket", SetDifficultyPacket = "SetDifficultyPacket", SetDisplayObjectivePacket = "SetDisplayObjectivePacket", SetHealthPacket = "SetHealthPacket", SetHudPacket = "SetHudPacket", SetLastHurtByPacket = "SetLastHurtByPacket", SetLocalPlayerAsInitializedPacket = "SetLocalPlayerAsInitializedPacket", SetPlayerGameTypePacket = "SetPlayerGameTypePacket", SetPlayerInventoryOptionsPacket = "SetPlayerInventoryOptionsPacket", SetScoreboardIdentityPacket = "SetScoreboardIdentityPacket", SetScorePacket = "SetScorePacket", SetSpawnPositionPacket = "SetSpawnPositionPacket", SetTimePacket = "SetTimePacket", SettingsCommandPacket = "SettingsCommandPacket", SetTitlePacket = "SetTitlePacket", ShowCreditsPacket = "ShowCreditsPacket", ShowProfilePacket = "ShowProfilePacket", ShowStoreOfferPacket = "ShowStoreOfferPacket", SimpleEventPacket = "SimpleEventPacket", SimulationTypePacket = "SimulationTypePacket", SpawnExperienceOrbPacket = "SpawnExperienceOrbPacket", SpawnParticleEffectPacket = "SpawnParticleEffectPacket", StartGamePacket = "StartGamePacket", StopSoundPacket = "StopSoundPacket", StructureBlockUpdatePacket = "StructureBlockUpdatePacket", StructureTemplateDataExportPacket = "StructureTemplateDataExportPacket", StructureTemplateDataRequestPacket = "StructureTemplateDataRequestPacket", SubChunkPacket = "SubChunkPacket", SubChunkRequestPacket = "SubChunkRequestPacket", SubClientLoginPacket = "SubClientLoginPacket", SyncActorPropertyPacket = "SyncActorPropertyPacket", TakeItemActorPacket = "TakeItemActorPacket", TextPacket = "TextPacket", TickingAreasLoadStatusPacket = "TickingAreasLoadStatusPacket", ToastRequestPacket = "ToastRequestPacket", TransferPacket = "TransferPacket", TrimDataPacket = "TrimDataPacket", UnlockedRecipesPacket = "UnlockedRecipesPacket", UpdateAbilitiesPacket = "UpdateAbilitiesPacket", UpdateAdventureSettingsPacket = "UpdateAdventureSettingsPacket", UpdateAttributesPacket = "UpdateAttributesPacket", UpdateBlockPacket = "UpdateBlockPacket", UpdateBlockSyncedPacket = "UpdateBlockSyncedPacket", UpdateClientInputLocksPacket = "UpdateClientInputLocksPacket", UpdatePlayerGameTypePacket = "UpdatePlayerGameTypePacket", UpdateSoftEnumPacket = "UpdateSoftEnumPacket", UpdateSubChunkBlocksPacket = "UpdateSubChunkBlocksPacket", WSConnectPacket = "WSConnectPacket"};

// Interfaces - 1
export interface PacketEventOptions { ignoredPacketIds?: PacketId[]; monitoredPacketIds?: PacketId[]};

// Classes - 9
export class HttpClient { public cancelAll(reason: string): void; public get(uri: string): Promise<HttpResponse>; public request(config: HttpRequest): Promise<HttpResponse>; private constructor();};
export class HttpHeader { public key: string; public value: _3e.SecretString | string; public constructor(key: string, value: _3e.SecretString | string);};
export class HttpRequest { public body: string; public headers: HttpHeader[]; public method: HttpRequestMethod; public timeout: number; public uri: string; public addHeader(key: string, value: _3e.SecretString | string): HttpRequest; public constructor(uri: string); public setBody(body: string): HttpRequest; public setHeaders(headers: HttpHeader[]): HttpRequest; public setMethod(method: HttpRequestMethod): HttpRequest; public setTimeout(timeout: number): HttpRequest;};
export class HttpResponse { public readonly body: string; public readonly headers: HttpHeader[]; public readonly request: HttpRequest; public readonly status: number; private constructor();};
export class NetworkBeforeEvents { public readonly packetReceive: PacketReceiveBeforeEventSignal; public readonly packetSend: PacketSendBeforeEventSignal; private constructor();};
export class PacketReceiveBeforeEventSignal { public subscribe(callback: (arg0: PacketReceivedBeforeEvent)=>void, options?: PacketEventOptions): (arg0: PacketReceivedBeforeEvent)=>void; public unsubscribe(callback: (arg0: PacketReceivedBeforeEvent)=>void): void; private constructor();};
export class PacketReceivedBeforeEvent { public cancel: boolean; public readonly packetId: PacketId; public readonly packetSize: number; public readonly sender?: _2c.Player; private constructor();};
export class PacketSendBeforeEvent { public cancel: boolean; public readonly packetId: PacketId; public readonly recipients: (_2c.Player | undefined)[]; private constructor();};
export class PacketSendBeforeEventSignal { public subscribe(callback: (arg0: PacketSendBeforeEvent)=>void, options?: PacketEventOptions): (arg0: PacketSendBeforeEvent)=>void; public unsubscribe(callback: (arg0: PacketSendBeforeEvent)=>void): void; private constructor();};

// Constants & Objects - 2

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;

// Functions - 0

// Errors - 0