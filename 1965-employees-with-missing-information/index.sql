select
    t.employee_id as employee_id
from
    -- full join
    (
        select
            e.employee_id,
            e.name,
            s.salary
        from
            employees as e
            left join salaries as s on e.employee_id = s.employee_id
        union
        select
            s.employee_id,
            e.name,
            s.salary
        from
            salaries as s
            left join employees as e on e.employee_id = s.employee_id
    ) as t
where
    t.name is null
    or t.salary is null
order by
    t.employee_id