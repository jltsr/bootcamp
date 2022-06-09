--soal 1
select r.region_id, r.region_name, c.country_id, c.country_name
from countries c
join regions r
on c.region_id = r.region_id
order by r.region_id, c.country_id;

--soal 2
select r.region_id, r.region_name, count(r.region_id) total_countries
from countries c
join regions r
on c.region_id = r.region_id
group by r.region_id
order by r.region_id;

--soal 3
select c.country_id, c.country_name, location_id, l.street_address, l.postal_code, l.city, l.state_province
from countries c
join locations l
on c.country_id = l.country_id
where region_id = (select region_id from regions where region_name = 'Europe')
order by c.country_id;

--soal 4
select d.department_id, d.department_name, l.location_id 
from departments d
join locations l
on d.location_id = l.location_id
join countries c
on c.country_id = l.country_id
join regions r
on r.region_id = c.region_id
where region_name = 'Americas'
order by department_id;

--soal 5
select region_name, count(r.region_id) total_department
from regions r
join countries c
on r.region_id = c.region_id
join locations l
on c.country_id = l.country_id
join departments d
on l.location_id = d.location_id
group by r.region_id;

--soal 6
select country_name, count(c.country_id) total_departments
from countries c
join locations l
on c.country_id = l.country_id
join departments d
on l.location_id = d.location_id
group by c.country_id
order by country_name;

--soal 7 
select country_name, count(c.country_id) total_departments
from countries c
join locations l
on c.country_id = l.country_id
join departments d
on l.location_id = d.location_id
group by c.country_id
order by total_departments desc
limit 1;

--soal 8
select d.department_id, department_name, count(d.department_id) total_emps
from departments d
join employees e
on d.department_id = e.department_id
group by d.department_id
order by total_emps;

--soal 9
select d.department_id, department_name, count(employee_id) total_emps
from regions r
join countries c
on r.region_id = c.region_id
join locations l
on c.country_id = l.country_id
join departments d
on l.location_id = d.location_id
join employees e
on d.department_id = e.department_id
where region_name = 'Americas'
group by d.department_id
order by total_emps;

--soal 10
select employee_id, first_name, last_name, salary, 
extract(year from AGE(NOW(),hire_date)) masa_kerja,
case when extract(year from AGE(NOW(),hire_date)) >= 25 then 5 * salary
else 3 * salary
end bonus
from employees
order by employee_id;

--soal 11
select extract(year from AGE(NOW(),hire_date)) masa_kerja,
sum(case when extract(year from AGE(NOW(),hire_date)) >= 25 then 5 * salary
else 3 * salary
end) bonus
from employees
group by masa_kerja
order by masa_kerja;

--soal 12
SELECT
	SUM(COALESCE(mk.colA,0)) "15 <= masa kerja <= 25",
	SUM(COALESCE(mk.colB,0)) "25 <= masa kerja <= 30",
	SUM(COALESCE(mk.colC,0)) "30 <= masa kerja <= 35"
FROM(
	SELECT 
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 15 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 25 
			THEN 1
			END colA,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 25 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 30
			THEN 1
			END colB,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 30 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 35
			THEN 1
			END colC
	FROM employees
) mk


--soal 13
SELECT
	d.department_id, department_name,
	SUM(colA) "15 <= masa kerja <= 25",
	SUM(colB) "25 <= masa kerja <= 30",
	SUM(colC) "30 <= masa kerja <= 35"
FROM(
	SELECT
		department_id,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 15 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 25 
			THEN 1 ELSE 0
			END colA,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 25 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 30
			THEN 1 ELSE 0
			END colB,
		CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) > 30 AND EXTRACT(YEAR FROM AGE(NOW(),hire_date)) <= 35
			THEN 1 ELSE 0
			END colC
	FROM employees
	ORDER BY department_id
) mk
JOIN departments d
ON d.department_id = mk.department_id
GROUP BY d.department_id;


