import { environment } from "src/environments/environment";

export class Team {
    public teamName: string;
    public initialSeed: number;
    public seed: number;
    public imagePath: string;

    constructor(teamName = "temp Name", seed = 69, imagePath = "") {
        if (imagePath === "") {
            imagePath = 'https://healthix.org/wp-content/uploads/2016/06/testimage-300x300.jpeg';
        } else {
            imagePath = environment.dbURL + imagePath
        }
        this.teamName = teamName;
        this.initialSeed = seed;
        this.seed = seed;
        this.imagePath = imagePath;
    }
}