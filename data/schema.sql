CREATE TABLE `User` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(100) NOT NULL,
	`LastName` VARCHAR(100),
	`Email` VARCHAR(100) NOT NULL UNIQUE,
	`DateCreated` DATE NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Course` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	`PreviewUrl` VARCHAR NOT NULL,
	`Price` INT NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Section` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`CourseId` INT NOT NULL,
	`orderDate` DATE NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Page` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	`SectionId` INT NOT NULL,
	`PageTypeId` INT NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Purchase` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`UserId` INT NOT NULL,
	`CourseId` INT NOT NULL,
	`Date` DATE NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `License` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`UserId` INT NOT NULL,
	`PurchaseId` INT NOT NULL,
	`CourseId` INT NOT NULL,
	`IsActive` BOOLEAN NOT NULL DEFAULT 'TRUE',
	PRIMARY KEY (`Id`)
);
CREATE TABLE `PageType` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Resource` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	`Url` VARCHAR,
	`PageId` INT NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Completion` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`UserId` INT NOT NULL,
	`PageId` INT NOT NULL,
	`Date` DATE NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Video` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	`Url` VARCHAR NOT NULL,
	`PageId` INT NOT NULL,
	`Runtime` INT NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `VideoTimestamp` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	`VideoId` INT NOT NULL,
	`Time` INT,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Quiz` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`Description` VARCHAR NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Question` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`QuizId` INT NOT NULL,
	PRIMARY KEY (`Id`)
);
CREATE TABLE `Answer` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR NOT NULL,
	`QuestionId` INT NOT NULL,
	`IsCorrect` BOOLEAN NOT NULL,
	PRIMARY KEY (`Id`)
);