package dip.after;

public class User {
    private final Database database;

    public User(Database database) {
        this.database = database;
    }

    public String create() {
        return database.insert();
    }
}
