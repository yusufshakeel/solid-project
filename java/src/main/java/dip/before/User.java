package dip.before;

public class User {
    private final MySQL mySQL;

    public User(MySQL mySQL) {
        this.mySQL = mySQL;
    }

    public String createUser() {
        // do something...
        return mySQL.insert();
    }
}
