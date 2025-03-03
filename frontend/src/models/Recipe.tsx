export interface Recipe {
    id: number,
    name: string,
    description: string,
    time: Date,
    difficulty: string,
    img_url?: string
}

export default Recipe;
