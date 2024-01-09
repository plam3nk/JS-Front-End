window.addEventListener("load", solve);

function solve() {
    const inputFields = {
        player: document.querySelector("#player"),
        score: document.querySelector("#score"),
        round: document.querySelector("#round"),
    };

    const form = document.querySelector(".scoring-content");

    const buttons = {
        addBtn: document.querySelector("#add-btn"),
    };

    const currInformation = {
        player: null,
        score: null,
        round: null,
    };

    function createDomElement(type, parrent, textContent, classList, id, attributes, useInnerHtml) {
        const element = document.createElement(type);

        if (useInnerHtml && textContent) {
            element.innerHTML = textContent;
        } else {
            if (textContent && type !== "input") {
                element.textContent = textContent;
            }
        }
        if (textContent && type === "input") {
            element.value = textContent;
        }

        if (classList && classList.length > 0) {
            element.classList.add(...classList);
        }

        if (id) {
            element.id = id;
        }

        if (attributes) {
            for (const key in attributes) {
                element[key] = attributes[key];
            }
        }

        if (parrent) {
            parrent.appendChild(element);
        }
        return element;
    }

    buttons.addBtn.addEventListener("click", loadAllData);

    function loadAllData() {
        if (Object.values(inputFields).some((x) => x.value === "")) {
            return;
        }
        const {player, score, round} = inputFields;

        const li = createDomElement("li", document.querySelector("#sure-list"), null, ["dart-item"]);
        const article = createDomElement("article", li);
        createDomElement("p", article, player.value);
        createDomElement("p", article, `Score: ${score.value}`);
        createDomElement("p", article, `Round: ${round.value}`);
        const editBtn = createDomElement("button", li, "edit", ["btn", "edit"]);
        const okBtn = createDomElement("button", li, "edit", ["btn", "ok"]);

        editBtn.addEventListener("click", editInformation);
        okBtn.addEventListener("click", okFunction);

        for (const key in inputFields) {
            currInformation[key] = inputFields[key].value;
        }

        buttons.addBtn.disabled = true;
        form.reset();
    }
    function editInformation() {
        for (const key in currInformation) {
            inputFields[key].value = currInformation[key];
        }
        document.querySelector("#sure-list").innerHTML = "";
        buttons.addBtn.disabled = false;
    }

    function okFunction() {
        let infoList = document.querySelector(".dart-item");
        console.log(infoList);
        let cloneList = infoList.cloneNode(true);
        cloneList.querySelector(".btn").remove();
        cloneList.querySelector(".btn").remove();
        document.querySelector("#scoreboard-list").appendChild(cloneList);
        document.querySelector("#sure-list").innerHTML = "";
        buttons.addBtn.disabled = false;
    }

    document.querySelector(".clear").addEventListener("click", () => window.location.reload());
}