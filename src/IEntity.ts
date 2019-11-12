export interface EntityProperties {

}

export interface IEntity extends EntityProperties {

}

export interface RootEntityProperties extends EntityProperties {
    readonly id: string;
    readonly type: string;
}

export interface IRootEntity extends IEntity, RootEntityProperties {
    getToken(): string;
}
