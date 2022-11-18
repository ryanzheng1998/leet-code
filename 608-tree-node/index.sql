select
    id,
    case
        when p_id is null then "Root"
        when tree.id in (
            select
                p_id
            from
                tree
        ) then "Inner"
        else "Leaf"
    end as Type
from
    tree;

--
select
    id,
    if(
        p_id is null,
        "Root",
        if(
            id in (
                select
                    p_id
                from
                    tree
            ),
            "Inner",
            "Leaf"
        )
    ) as Type
from
    tree;