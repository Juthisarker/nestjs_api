import { DataSource, ViewColumn, ViewEntity } from "typeorm";
import { User } from "./../users/user.entity";
import { Report } from "./../reports/report.entity";
@ViewEntity({
    expression: (dataSource: DataSource) => dataSource
        .createQueryBuilder()
        .select("user.id", "id")
        .addSelect("user.email", "email")
        .addSelect("report.price", "price")
        .from(User, "user")
        .leftJoin(Report, "report", "user.id = report.id")
})
export class UserView {
    @ViewColumn()
    id: number;

    @ViewColumn()
    source: string;

    @ViewColumn()
    destination: string;
}
