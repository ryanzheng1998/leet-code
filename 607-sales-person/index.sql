select
    s.name
from
    salesPerson as s
where
    s.sales_id not in (
        select
            o.sales_id
        from
            orders as o
            join company as c on c.com_id = o.com_id
        where
            c.name like 'RED'
    )