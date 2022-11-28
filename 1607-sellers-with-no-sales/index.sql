select
    s.seller_name
from
    seller as s
    left join orders as o on s.seller_id = o.seller_id
    and (
        sale_date between '2020-01-01'
        and '2020-12-31'
    )
where
    o.order_id is null
order by
    s.seller_name;

---
select
    s.seller_name
from
    seller as s
    left join orders as o on s.seller_id = o.seller_id
    and year(o.sale_date) = '2020'
where
    o.order_id is null
order by
    s.seller_name