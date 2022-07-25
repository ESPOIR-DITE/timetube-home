export class Channel{
    constructor(id, name, channelTypeId, userId, region, date, image, imageBase64,description) {
        this.id = id;
        this.name = name;
        this.channelTypeId = channelTypeId;
        this.userId = userId;
        this.region = region;
        this.date  = date;
        this.image = image;
        this.imageBase64 = imageBase64;
        this.description = description;
    }
}