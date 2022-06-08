--soal1
CREATE TABLE regions(
    region_id SERIAL PRIMARY KEY,
    region_name VARCHAR(25)
);

CREATE TABLE countries(
    country_id CHAR(2) PRIMARY KEY,
    country_name VARCHAR(40),
    region_id INTEGER NOT NULL,
    FOREIGN KEY(region_id) REFERENCES regions(region_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE locations(
    location_id SERIAL PRIMARY KEY,
    street_address VARCHAR(40),
    postal_code VARCHAR(12),
    city VARCHAR(30) NOT NULL,
    state_province VARCHAR(25),
    country_id CHAR(2) NOT NULL,
    FOREIGN KEY(country_id) REFERENCES countries(country_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE departments(
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
    location_id INTEGER,
    FOREIGN KEY(location_id) REFERENCES locations(location_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE jobs(
    job_id SERIAL PRIMARY KEY,
    job_title VARCHAR(35) NOT NULL,
    min_salary NUMERIC(8,2),
    max_salary NUMERIC(8,2)
);

CREATE TABLE employees(
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    hire_date DATE NOT NULL,
    salary NUMERIC(8,2) NOT NULL,
    manager_id INTEGER,
    job_id INTEGER NOT NULL,
    department_id INTEGER,
    FOREIGN KEY(job_id) REFERENCES jobs(job_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(department_id) REFERENCES departments(department_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(manager_id) REFERENCES employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE dependents(
    dependent_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    relationship VARCHAR(25) NOT NULL,
    employee_id INTEGER,
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE projects(
    proj_id SERIAL PRIMARY KEY,
    proj_name VARCHAR(100),
    proj_createdon DATE,
    proj_duedate DATE,
    proj_cust_name VARCHAR(100)
);

CREATE TABLE project_assignment(
    pras_proj_id INTEGER,
    pras_employee_id INTEGER,
    pras_startdate DATE,
    pras_enddate DATE,
    pras_status VARCHAR(15),
    PRIMARY KEY(pras_proj_id, pras_employee_id)
);

--soal2
ALTER TABLE projects 
ADD COLUMN proj_description VARCHAR(255),
ADD COLUMN proj_status VARCHAR(15),
ADD COLUMN proj_amount INTEGER;

--soal3
ALTER TABLE projects
ADD COLUMN proj_account_mgr INTEGER;

ALTER TABLE projects
ADD COLUMN employee_id INTEGER,
ADD CONSTRAINT employee_id FOREIGN KEY(employee_id)
REFERENCES employees(employee_id);

--soal4
-- Menampilkan seluruh id employee yang memiliki jabatan manager
SELECT DISTINCT(manager_id) FROM employees

-- Selanjutnya memasukkan 3 records
INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_account_mgr,employee_id) 
VALUES ('E-COMMERCE',now(),now()+INTERVAL '100 days','TELKOMSEL','INPROGRESS',100,100);
INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_account_mgr,employee_id) 
VALUES ('TRAVELOKA',now(),now()+INTERVAL '100 days','XL','INPROGRESS',120,120);
INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_account_mgr,employee_id) 
VALUES ('TIKET.COM',now(),now()+INTERVAL '100 days','INDOSAT','INPROGRESS',201,201);

--soal5
-- Menampilkan ID dari department IT
SELECT department_id  FROM departments 
WHERE department_name = 'IT'

-- Setelah mendapatkan ID dari department IT selanjutnya menampilkan ID dari employee yang ada di department IT 
SELECT employee_id FROM employees
WHERE department_id = 6

-- Selanjutnya menambahkan data ke table project_assignment dengan employee yang ada di department IT
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (1, 104, '2021-09-14','ASSIGNED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (1, 105, '2021-09-14','2021-09-17','COMPLETED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (1, 106, '2021-09-14','INPROGRESS');

INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_status)
VALUES (2, 104, '2021-09-14','ASSIGNED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (2, 105, '2021-09-14','2021-09-17','COMPLETED');
INSERT INTO project_assignment(pras_proj_id, pras_employee_id, pras_startdate, pras_enddate, pras_status)
VALUES (2, 106, '2021-09-14','2021-09-17','INPROGRESS');

--soal6

SELECT * FROM project_assignment
WHERE pras_status = 'COMPLETED';