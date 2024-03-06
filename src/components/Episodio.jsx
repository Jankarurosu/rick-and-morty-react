export const Episodio = (episodios) => {
    if (episodios && episodios.length > 0) {
        const primerEpisodioUrl = episodios[0];
        const segmentos = primerEpisodioUrl.split('/');
        const numeroEpisodio = segmentos[segmentos.length - 1];
        return numeroEpisodio;
    }
    return "Desconocido";
}
