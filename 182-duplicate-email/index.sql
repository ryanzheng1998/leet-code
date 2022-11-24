select
    distinct p.email
from
    person as p
    join person as p2 on p.email = p2.email
where
    p.id != p2.id