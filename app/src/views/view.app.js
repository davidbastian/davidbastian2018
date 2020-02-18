class View {
    constructor() {
        this.body = document.querySelector('body');
        this.setup();
    }

    setup() {
        const markup=/*html*/ `
            <header><a id="logo" href="#/">David Bastian.</a></header>
            <main>main</main>
            <footer>footer</footer>
        `;

        this.render(markup);


    }

    render(markup) {
        this.body.innerHTML = markup;
    }

}

export default View;