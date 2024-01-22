import {Content} from './content-interface';
class ContentList {
    private ems: Content[];
    static contentCount =0;
    constructor(it: Content) {
        this.ems = [];
        this.ems[0] = it;
        this.indexNumbering();
    }
      get tems(): Content[] {
        return this.ems;
      }
      indexNumbering() {
        return ContentList.contentCount++;
      }
      itemCount() : number {
        return this.ems.length;
      }
      innerHTML(index: number){
        if (index >= 0 && index < this.ems.length) {
            let contentItems = this.ems[index];
            return `<div>
            <h1>${contentItems.title}</h1>
            <p> Description: ${contentItems.description}</p>
            <p> Creator: ${contentItems.creator}</p>
            <p> Type: ${contentItems.type}</p>
            <img src = "${contentItems.imgUrl}">
            </div>`;
        }
            else {
                return ('Index out of bounds');
            }
      }

      total(contentItem: Content) {
        this.ems.push(contentItem);
      }
}

export {ContentList};