package dip.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class DIPTests {
    @Test
    @DisplayName("Using abstraction")
    public void shouldUseAbstraction() {
        Database database = new MySQL();
        User user = new User(database);
        Assertions.assertEquals(user.create(), "Inserted 1 row.");
    }
}
