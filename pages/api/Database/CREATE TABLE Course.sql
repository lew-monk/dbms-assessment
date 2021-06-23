CREATE TABLE Course
(
  Course_ID     NUMBER NOT NULL,
  Course_Name   VARCHAR2(50 CHAR) NOT NULL,
  Department_ID NUMBER   NOT NULL,
  CONSTRAINT PK_Course PRIMARY KEY (Course_ID)
);

CREATE TABLE Departments
(
  Department_ID   NUMBER   NOT NULL,
  Department_Name VARCHAR2(50 CHAR) NOT NULL,
  CONSTRAINT PK_Departments PRIMARY KEY (Department_ID)
);

COMMENT ON TABLE Departments IS 'This covers the various departments in the school';

CREATE TABLE Employee
(
  Staff_ID   NUMBER   NOT NULL,
  Pay        NUMBER   NOT NULL,
  First_Name VARCHAR2(50 CHAR) NOT NULL,
  Last_Name  VARCHAR2(50 CHAR) NOT NULL,
  Age        NUMBER   NOT NULL,
  Sex        VARCHAR2(50 CHAR) NOT NULL,
  Title      VARCHAR2(50 CHAR) NOT NULL,
  CONSTRAINT PK_Employee PRIMARY KEY (Staff_ID)
);

CREATE TABLE Gardian
(
  Gaurdian_ID NUMBER   NOT NULL,
  First_Name  VARCHAR2(50 CHAR) NOT NULL,
  Last_Name   VARCHAR2(50 CHAR) NOT NULL,
  Contact     NUMBER   NOT NULL,
  Sex         VARCHAR2(50 CHAR) NOT NULL,
  Student_ID  NUMBER   NOT NULL,
  CONSTRAINT PK_Gardian PRIMARY KEY (Gaurdian_ID)
);

CREATE TABLE Lec_Units
(
  Unit_ID  NUMBER NOT NULL,
  Staff_ID NUMBER   NOT NULL
);

CREATE TABLE Lectures
(
  Title          VARCHAR2 NULL,
  Staff_ID      NUMBER   NOT NULL,
  Department_ID NUMBER   NOT NULL,
  CONSTRAINT PK_Lectures PRIMARY KEY (Staff_ID)
);

CREATE TABLE Payment
(
  Pay_ID     NUMBER   NOT NULL,
  Status     VARCHAR2 DEFAULT 'Not Paid' NOT NULL,
  Student_ID NUMBER   NOT NULL,
  CONSTRAINT PK_Payment PRIMARY KEY (Pay_ID)
);

COMMENT ON TABLE Payment IS 'This entails the various Payments made';

CREATE TABLE Register_Units
(
  Student_ID NUMBER   NOT NULL,
  Unit_ID    NUMBER NOT NULL,
  CONSTRAINT PK_Register_Units PRIMARY KEY (Unit_ID)
);

COMMENT ON TABLE Register_Units IS 'This Entity entails the units Information';

CREATE TABLE Staff
(
  Area     VARCHAR2 NOT NULL,
  Staff_ID NUMBER   NOT NULL,
  CONSTRAINT PK_Staff PRIMARY KEY (Staff_ID)
);

CREATE TABLE Student
(
  Student_ID      NUMBER   NOT NULL,
  First_Name      VARCHAR2(50 CHAR) NOT NULL,
  Last_Name       VARCHAR2(50 CHAR) NOT NULL,
  Units_Rgistered VARCHAR2(50 CHAR) NOT NULL,
  Fee_Billed      NUMBER   DEFAULT 0,
  Age             NUMBER   NOT NULL,
  Sex             VARCHAR2(50 CHAR) NOT NULL,
  Stage           NUMBER   NOT NULL,
  Course_ID       NUMBER NOT NULL,
  Gaurdian_ID     NUMBER   NOT NULL,
  CONSTRAINT PK_Student PRIMARY KEY (Student_ID)
);

COMMENT ON TABLE Student IS 'This table entails the studenrs informatio';

CREATE TABLE Units
(
  Unit_ID   NUMBER NOT NULL,
  Unit_Name NUMBER NOT NULL,
  Course_ID NUMBER NOT NULL,
  CONSTRAINT PK_Units PRIMARY KEY (Unit_ID)
);