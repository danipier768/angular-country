export interface ProductInterface{
    name: {
        common:string;
    };
    population: string;
    region: string;
    capital: string [];
    flags: {
        png: string;
        svg: string;
    }
}