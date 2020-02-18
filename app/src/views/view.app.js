class View {
    constructor() {
        this.body = document.querySelector('body');
    }

    setup(data) {
        const markup=/*html*/ `
            <header class="container">

                    <a id="logo" href="#/">${data.details.logo}</a>
                    <nav>
                        <a href="#/about">about me</a>
                        <a href="mailto:d@davidbastian.red" target="_blank">${data.details.email}</a>
                    </nav>

            </header>
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