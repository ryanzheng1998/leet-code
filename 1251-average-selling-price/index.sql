select
    p.product_id,
    round(sum(p.price * u.units) / sum(u.units), 2) as average_price
from
    prices as p
    join unitsSold as u on p.product_id = u.product_id
    and u.purchase_date >= p.start_date
    and u.purchase_date <= p.end_date
group by
    p.product_id