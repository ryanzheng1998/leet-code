select
    w.name as warehouse_name,
    sum(w.units * p.width * p.length * p.height) as volume
from
    warehouse as w
    join products as p on w.product_id = p.product_id
group by
    w.name