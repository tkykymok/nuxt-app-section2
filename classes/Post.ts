export class Post {
  public id: string = '';
  public title: string = '';
  public previewText: string = '';
  public thumbnail: string = '';

  constructor(id: string, title: string, previewText: string, thumbnail: string) {
    this.id = id;
    this.title = title;
    this.previewText = previewText;
    this.thumbnail = thumbnail;
  }
}
