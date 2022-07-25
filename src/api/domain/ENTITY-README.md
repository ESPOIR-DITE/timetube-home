## Channel Entity

type Channel struct {
Id            string `json:"id" gorm:"primaryKey"`
Name          string `json:"name" gorm:"not null"`
ChannelTypeId string `json:"channel_type_id"`
UserId        string `json:"user_id"`
Region        string `json:"region"`
Date          string `json:"date"`
Image         []byte `json:"image"`
ImageBase64   string `json:"image_base_64" gorm:"-:all"`
Description   string `json:"description"`
}

type ChannelType struct {
Id          string `json:"id" gorm:"primaryKey"`
Name        string `json:"name"`
Description string `json:"description"`
}

type ChannelSubscription struct {
Id        string `json:"id" gorm:"primaryKey"`
ChannelId string `json:"channel_id"`
UserId    string `json:"user_id"`
Date      string `json:"date"`
}

## User Entities

type UserStack struct {
SuperAdmin int64
Admin      int64
Agent      int64
}

type User struct {
Email     string `json:"email" gorm:"primaryKey"`
Name      string `json:"name"`
Surname   string `json:"surname"`
BirthDate string `json:"birthDate"`
RoleId    string `json:"roleId"`
}

type Role struct {
Id          string `json:"id" gorm:"primaryKey"`
Name        string `json:"name"`
Description string `json:"description"`
}


type UserAccount struct {
CustomerId string `json:"customerId" gorm:"primaryKey"`
Email      string `json:"email"`
Password   string `json:"password"`
Date       string `json:"date"`
Status     bool   `json:"status"`
}


type UserSubscription struct {
Id             string `json:"id" gorm:"primaryKey"`
UserId         string `json:"userId"`
Stat           string `json:"stat"`
SubscriptionId string `json:"subscriptionId"`
Date           string `json:"date"`
}

type UserVideo struct {
Id         string `json:"id" gorm:"primaryKey"`
CustomerId string `json:"customerId"`
VideoId    string `json:"videoId"`
Date       string `json:"date"`
}

## video Entities

type Video struct {
Id           string  `json:"id" gorm:"primaryKey"`
Title        string  `json:"title"`
Date         string  `json:"date"`
DateUploaded string  `json:"dateUploaded"`
Description  string  `json:"description"`
IsPrivate    bool    `json:"isPrivate"`
Price        float64 `json:"price"`
URL          string  `json:"url"`
}

type VideoData struct {
Id       string `json:"id" gorm:"primaryKey"`
Picture  []byte `json:"picture"`
Video    []byte `json:"video" gorm:"-:all"`
FileType string `json:"fileType"`
FileSize string `json:"fileSize"`
}

type VideoCategory struct {
Id         string `json:"id" gorm:"primaryKey"`
VideoId    string `json:"videoId"`
CategoryId string `json:"categoryId"`
}

type VideoComment struct {
Id        string `json:"id" gorm:"primaryKey"`
VideoId   string `json:"videoId"`
CommentId string `json:"categoryId"`
}

type Category struct {
Id          string `json:"id" gorm:"primaryKey"`
Name        string `json:"name"`
Description string `json:"description"`
}

type VideoRelated struct {
Id             string `json:"id" gorm:"primaryKey"`
CurrentVideoId string `json:"currentVideo"`
RelatedVideoId string `json:"relatedVideoId"`
}