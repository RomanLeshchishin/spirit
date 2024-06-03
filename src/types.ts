export interface photoSlide{
    src: string,
    heading: string,
    description: string,
    buttonText: string
}

export interface IPhoto {
    id: number,
    imageUrl: string,
    name: string,
    description: string
}

export interface Coach{
	fullName: string,
	imageUrl: string,
	education: string,
	description: string
}

export interface Horse{
	imageUrl: string,
	name: string,
	breed: string,
	suit: string,
	year: number
}

export interface IPromotion{
	id: number,
	title: string,
	description: string,
	startDate: Date,
	endDate: Date
}
