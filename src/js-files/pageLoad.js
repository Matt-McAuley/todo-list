import { Project } from "./classes";

export default function pageLoad() {
    const body = document.querySelector("body");

    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");

    const mainSpace = document.createElement("div");
    mainSpace.classList.add("main");

    let general = new Project("General");
    const generalTab = document.createElement("button");
    generalTab.classList.add("general");
    generalTab.textContent = "General";

    const projects = document.createElement("select");
    projects.classList.add("projectSelect");
    const noProjects = document.createElement("option");
    noProjects.textContent = "No Projects";
    projects.append(noProjects);

    sideBar.append(generalTab);
    sideBar.append(projects);

    body.append(sideBar);
    body.append(mainSpace);
}