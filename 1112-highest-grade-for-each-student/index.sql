select
    student_id,
    min(course_id) as course_id,
    grade
from
    enrollments
where
    (student_id, grade) in (
        select
            student_id,
            max(grade)
        from
            enrollments
        group by
            student_id
    )
group by
    student_id
order by
    student_id;

---
select
    student_id,
    course_id,
    grade
from
    (
        select
            *,
            rank() over (
                partition by student_id
                order by
                    grade desc,
                    course_id
            ) as `rank`
        from
            enrollments
    ) as e
where
    `rank` = 1