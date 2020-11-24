import { Subject } from 'rxjs/internal/Subject';
import { NewObjectEvent } from '../events/NewObjectEvent';
import { ObjectUpdatedEvent } from '../events/ObjectUpdatedEvent';
import { ObjectKilledEvent } from '../events/ObjectKilledEvent';
import { SelectedObjectEvent } from '../events/SelectedObjectEvent';
import { ChatEvent } from '../events/ChatEvent';
import { InstantMessageEvent } from '../events/InstantMessageEvent';
import { GroupInviteEvent } from '../events/GroupInviteEvent';
import { FriendRequestEvent } from '../events/FriendRequestEvent';
import { InventoryOfferedEvent } from '../events/InventoryOfferedEvent';
import { LureEvent } from '../events/LureEvent';
import { TeleportEvent } from '../events/TeleportEvent';
import { DisconnectEvent } from '../events/DisconnectEvent';
import { GroupChatEvent } from '../events/GroupChatEvent';
import { GroupNoticeEvent } from '../events/GroupNoticeEvent';
import { GroupChatSessionJoinEvent } from '../events/GroupChatSessionJoinEvent';
import { GroupChatSessionAgentListEvent } from '../events/GroupChatSessionAgentListEvent';
import { FriendResponseEvent } from '../events/FriendResponseEvent';
import { ScriptDialogEvent } from '../events/ScriptDialogEvent';
import { EventQueueStateChangeEvent } from '../events/EventQueueStateChangeEvent';
import { FriendOnlineEvent } from '../events/FriendOnlineEvent';
import { FriendRightsEvent } from '../events/FriendRightsEvent';
import { FriendRemovedEvent } from '../events/FriendRemovedEvent';
import { ObjectPhysicsDataEvent } from '../events/ObjectPhysicsDataEvent';
import { ParcelPropertiesEvent } from '../events/ParcelPropertiesEvent';
import { ObjectResolvedEvent } from '../events/ObjectResolvedEvent';
import { GameObject } from './public/GameObject';
import { Avatar } from './public/Avatar';
import { BulkUpdateInventoryEvent } from '../events/BulkUpdateInventoryEvent';
import { InventoryResponseEvent } from '../events/InventoryResponseEvent';
import { LandStatsEvent } from '../events/LandStatsEvent';
import { SimStatsEvent } from '../events/SimStatsEvent';

export class ClientEvents
{
    onNearbyChat: Subject<ChatEvent> = new Subject<ChatEvent>();
    onInstantMessage: Subject<InstantMessageEvent> = new Subject<InstantMessageEvent>();
    onGroupInvite: Subject<GroupInviteEvent> = new Subject<GroupInviteEvent>();
    onFriendRequest: Subject<FriendRequestEvent> = new Subject<FriendRequestEvent>();
    onInventoryOffered: Subject<InventoryOfferedEvent> = new Subject<InventoryOfferedEvent>();
    onLure: Subject<LureEvent> = new Subject<LureEvent>();
    onTeleportEvent: Subject<TeleportEvent> = new Subject<TeleportEvent>();
    onDisconnected: Subject<DisconnectEvent>  = new Subject<DisconnectEvent>();
    onCircuitLatency: Subject<number> = new Subject<number>();
    onGroupChat: Subject<GroupChatEvent> = new Subject<GroupChatEvent>();
    onGroupNotice: Subject<GroupNoticeEvent> = new Subject<GroupNoticeEvent>();
    onGroupChatSessionJoin: Subject<GroupChatSessionJoinEvent> = new Subject<GroupChatSessionJoinEvent>();
    onGroupChatAgentListUpdate: Subject<GroupChatSessionAgentListEvent> = new Subject<GroupChatSessionAgentListEvent>();
    onFriendResponse: Subject<FriendResponseEvent> = new Subject<FriendResponseEvent>();
    onInventoryResponse: Subject<InventoryResponseEvent> = new Subject<InventoryResponseEvent>();
    onScriptDialog: Subject<ScriptDialogEvent> = new Subject<ScriptDialogEvent>();
    onEventQueueStateChange: Subject<EventQueueStateChangeEvent> = new Subject<EventQueueStateChangeEvent>();
    onFriendOnline: Subject<FriendOnlineEvent> = new Subject<FriendOnlineEvent>();
    onFriendRights: Subject<FriendRightsEvent> = new Subject<FriendRightsEvent>();
    onFriendRemoved: Subject<FriendRemovedEvent> = new Subject<FriendRemovedEvent>();
    onPhysicsDataEvent: Subject<ObjectPhysicsDataEvent> = new Subject<ObjectPhysicsDataEvent>();
    onParcelPropertiesEvent: Subject<ParcelPropertiesEvent> = new Subject<ParcelPropertiesEvent>();
    onNewObjectEvent: Subject<NewObjectEvent> = new Subject<NewObjectEvent>();
    onObjectUpdatedEvent: Subject<ObjectUpdatedEvent> = new Subject<ObjectUpdatedEvent>();
    onObjectUpdatedTerseEvent: Subject<ObjectUpdatedEvent> = new Subject<ObjectUpdatedEvent>();
    onObjectKilledEvent: Subject<ObjectKilledEvent> = new Subject<ObjectKilledEvent>();
    onSelectedObjectEvent: Subject<SelectedObjectEvent> = new Subject<SelectedObjectEvent>();
    onObjectResolvedEvent: Subject<ObjectResolvedEvent> = new Subject<ObjectResolvedEvent>();
    onAvatarEnteredRegion: Subject<Avatar> = new Subject<Avatar>();
    onAvatarLeftRegion: Subject<Avatar> = new Subject<Avatar>();
    onRegionTimeDilation: Subject<number> = new Subject<number>();
    onBulkUpdateInventoryEvent: Subject<BulkUpdateInventoryEvent> = new Subject<BulkUpdateInventoryEvent>();
    onLandStatReplyEvent: Subject<LandStatsEvent> = new Subject<LandStatsEvent>();
    onSimStats: Subject<SimStatsEvent> = new Subject<SimStatsEvent>();
}
