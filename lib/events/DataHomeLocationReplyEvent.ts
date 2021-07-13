import { UUID } from '../classes/UUID';
import { Vector3 } from '../classes/Vector3';
import * as Long from 'long';

export class DataHomeLocationReplyEvent
{
    AgentID: UUID;
    RegionHandle: Long;
    Position: Vector3;
    LookAt: Vector3;
}