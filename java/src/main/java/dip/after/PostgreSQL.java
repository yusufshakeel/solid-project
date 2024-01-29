package dip.after;

public class PostgreSQL implements Database {

    @Override
    public String connect() {
        return "Connected on port 5432.";
    }

    @Override
    public String insert() {
        return "Inserted 1 row.";
    }
}
