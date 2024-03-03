CREATE TABLE Student (
    Roll VARCHAR(255),
    Name VARCHAR(255),
    Dept VARCHAR(255),
    PRIMARY KEY (Roll)
);

CREATE TABLE Event (
    EID INT,
    EName VARCHAR(255),
    Date DATE,
    Type VARCHAR(255),
    Description VARCHAR(255),
    PRIMARY KEY (EID)
);

CREATE TABLE Role (
    RID INT,
    RName VARCHAR(255),
    Description VARCHAR(255),
    PRIMARY KEY (RID)
);

CREATE TABLE Student_Manage (
    Roll VARCHAR(255),
    EID INT,
    RID INT,
    PRIMARY KEY (Roll, EID, RID),
    FOREIGN KEY (Roll) REFERENCES Student(Roll),
    FOREIGN KEY (EID) REFERENCES Event(EID),
    FOREIGN KEY (RID) REFERENCES Role(RID)
);

CREATE TABLE College (
    Name VARCHAR(255),
    Address VARCHAR(255),
    PRIMARY KEY (Name)
);

CREATE TABLE Volunteer (
    Roll VARCHAR(255),
    PRIMARY KEY (Roll),
    FOREIGN KEY (Roll) REFERENCES Student(Roll)
);

CREATE TABLE Event_Has_Volunteer (
    EID INT,
    Roll VARCHAR(255),
    PRIMARY KEY (EID, Roll),
    FOREIGN KEY (EID) REFERENCES Event(EID),
    FOREIGN KEY (Roll) REFERENCES Volunteer(Roll) 
);

CREATE TABLE Participant (
    Name VARCHAR(255),
    PID VARCHAR(255),
    CollegeName VARCHAR(255),
    PRIMARY KEY (PID),
    FOREIGN KEY (CollegeName) REFERENCES College(Name)
);

CREATE TABLE Student_Participates (
    Roll VARCHAR(255),
    EID INT,
    PRIMARY KEY (Roll, EID),
    FOREIGN KEY (Roll) REFERENCES Student(Roll),
    FOREIGN KEY (EID) REFERENCES Event(EID)
);

CREATE TABLE Event_Has_Participant (
    EID INT,
    PID VARCHAR(255),
    PRIMARY KEY (EID, PID),
    FOREIGN KEY (EID) REFERENCES Event(EID),
    FOREIGN KEY (PID) REFERENCES Participant(PID) 
);

CREATE TABLE users (
    id VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE logistics (
    PID VARCHAR(255),
    HALL VARCHAR(255),
    ROOMNO VARCHAR(255),
    PRIMARY KEY (PID),
    FOREIGN KEY (PID) REFERENCES Participant(PID)
);