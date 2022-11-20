select
    w.id
from
    weather as w
    join weather as pre_w on w.recordDate = pre_w.recordDate + interval 1 day
where
    w.temperature > pre_w.temperature