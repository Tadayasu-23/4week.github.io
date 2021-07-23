import headline from "./headline";

export default {
    title: "headline",
    components: {headline},
}

export const defaultView = () => ({
    components: {headline},
    template: ` <headline title="Панель администрирования">
                    <h1></h1>
                </headline>`
});