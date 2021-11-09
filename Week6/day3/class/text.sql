-- Exercises on ONE TO ONE RELATIONSHIP, ONE TO MANY RELATIONSHIP
-- Database: week6day3exInClass

-- DROP DATABASE "week6day3exInClass";

-- CREATE DATABASE "week6day3exInClass"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
-- create sequence serial_seq
-- start 10
-- increment 10;

-- CREATE TABLE DEPARTMENT
-- (
--    DEPTCODE   INTEGER PRIMARY KEY DEFAULT nextval('serial_seq'),
--    DeptName   CHAR(30),
--    LOCATION   VARCHAR(33) unique
-- );

-- CREATE TABLE EMPLOYEE
-- (
--    EmpCode      INTEGER PRIMARY KEY,
--    EmpFName     VARCHAR(15) not null,
--    EmpLName     VARCHAR(15) not null,
--    Job          VARCHAR(45),
--    Manager      CHAR(4),
--    HireDate     DATE,
--    Salary       decimal default 0,
--    Commission   INTEGER,
--    DEPTCODE     INTEGER REFERENCES DEPARTMENT (DEPTCODE)
-- );
-- select * from DEPARTMENT
-- select * from EMPLOYEE

-- STEPS:

-- I. Improve the tables

-- 1. DEPTCODE is the PK of the Department table (incremented by 10)
-- the first deptcode is 10, the second dept code is 20 ect...
-- 2. EmpCode is the PK of the Employee table (not serial)
-- 3. DEPTCODE is the FK of the Department table
-- 4. Default salary is : 0 and is a decimal
-- 5. Employee names cannot be null
-- 6. Location department needs to be unique

-- II. Insert rows

-- INSERT INTO DEPARTMENT (DeptName, LOCATION)
-- VALUES ('FINANCE', 'EDINBURGH'),
--                               ('SOFTWARE','PADDINGTON'),
--                               ('SALES', 'MAIDSTONE'),
--                               ('MARKETING', 'DARLINGTON'),
--                               ('ADMIN', 'BIRMINGHAM');
-- INSERT INTO EMPLOYEE (EmpCode, EmpFName, EmpLName, Job, Manager, HireDate, Salary, Commission, DEPTCODE) 
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANAYLYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);

-- CREATE TABLE manager
-- (
--    DEPTCODE	INTEGER unique REFERENCES DEPARTMENT (DEPTCODE),
--    manager_id   INTEGER PRIMARY KEY ,
--    manager_name   VARCHAR(15) not null,
--    manager_type    VARCHAR(30) not null
-- );
-- TRUNCATE TABLE manager RESTART IDENTITY
-- select * from manager
-- insert into manager (manager_id, manager_name, manager_type)
-- values (10, 'alex_fergeson', 'mad'),
-- 		(10, 'arsen_venger', 'stubrn')



-- III. Create a new table

-- Create a Manager table with the columns manager_id, manager_name, manager_type (ie.nice, angry, funny ect...):
-- that has a one to one relationship with the department table: 
-- a department can be managed by only 1 manager, and a manager can manage only 1 department

-- Insert 2 managers, with the same department id, what happens ?







