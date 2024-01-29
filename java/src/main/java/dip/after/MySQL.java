package dip.after;

public class MySQL implements Database {

    @Override
    public String connect() {
        return "Connected on port 3306.";
    }

    @Override
    public String insert() {
        return "Inserted 1 row.";
    }
}
