const ELEMENT = document.getElementById('page')

export class BaseRouter {
    constructor(list){
        this.list = list
        console.log(list)
    }

    render(state) {
        let ele = this.list.find(ele => ele.path === state)
        ele = ele ? ele : this.list.find(ele => ele.path === '*')
        ELEMENT.innerText = ele.component
    }
}