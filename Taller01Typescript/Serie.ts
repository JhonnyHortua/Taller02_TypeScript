export class Serie{
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    sinopsis: string;
    link: string;
    imagen: string;

    constructor(id: number, nombre: string, canal: string, temporadas: number, sinopsis: string, link: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.sinopsis = sinopsis;
        this.link = link;
        this.imagen = imagen;
    }

}