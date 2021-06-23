ALTER TABLE Payment
  ADD CONSTRAINT FK_Student_TO_Payment
    FOREIGN KEY (Student_ID)
    REFERENCES Student (Student_ID);

ALTER TABLE Staff
  ADD CONSTRAINT FK_Employee_TO_Staff
    FOREIGN KEY (Staff_ID)
    REFERENCES Employee (Staff_ID);

ALTER TABLE Lectures
  ADD CONSTRAINT FK_Employee_TO_Lectures
    FOREIGN KEY (Staff_ID)
    REFERENCES Employee (Staff_ID);

ALTER TABLE Student
  ADD CONSTRAINT FK_Course_TO_Student
    FOREIGN KEY (Course_ID)
    REFERENCES Course (Course_ID);

ALTER TABLE Lectures
  ADD CONSTRAINT FK_Departments_TO_Lectures
    FOREIGN KEY (Department_ID)
    REFERENCES Departments (Department_ID);

ALTER TABLE Course
  ADD CONSTRAINT FK_Departments_TO_Course
    FOREIGN KEY (Department_ID)
    REFERENCES Departments (Department_ID);

ALTER TABLE Units
  ADD CONSTRAINT FK_Course_TO_Units
    FOREIGN KEY (Course_ID)
    REFERENCES Course (Course_ID);

ALTER TABLE Register_Units
  ADD CONSTRAINT FK_Units_TO_Register_Units
    FOREIGN KEY (Unit_ID)
    REFERENCES Units (Unit_ID);

ALTER TABLE Lec_Units
  ADD CONSTRAINT FK_Units_TO_Lec_Units
    FOREIGN KEY (Unit_ID)
    REFERENCES Units (Unit_ID);

ALTER TABLE Lec_Units
  ADD CONSTRAINT FK_Lectures_TO_Lec_Units
    FOREIGN KEY (Staff_ID)
    REFERENCES Lectures (Staff_ID);

ALTER TABLE Gardian
  ADD CONSTRAINT FK_Student_TO_Gardian
    FOREIGN KEY (Student_ID)
    REFERENCES Student (Student_ID);
