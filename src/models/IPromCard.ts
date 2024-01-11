export interface IPromCard{
    createdAt: Date,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date
}

export interface IPromCardWithId extends IPromCard{
    id: number
}
