export class UserForm {
  constructor(public parent: Element | null) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:Button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log('onButtonClick');
  }

  onHeaderHover(): void {
    console.log('onHeaderHover');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text" placeholder="Name" />
        <button>Click</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent?.append(templateElement.content);
  }
}
