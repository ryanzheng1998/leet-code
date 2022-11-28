select
    round (
        (
            select
                count(*)
            from
                delivery
            where
                order_date = customer_pref_delivery_date
        ) / (
            select
                count(*)
            from
                delivery
        ) * 100,
        2
    ) as immediate_percentage;

---
select
    round(
        avg(order_date = customer_pref_delivery_date) * 100,
        2
    ) as immediate_percentage
from
    delivery