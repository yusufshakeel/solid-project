package dip.before;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class DIPTests {
    @Test
    @DisplayName("Using MySQL")
    public void shouldUseConcreteClass() {
        MySQL mySQL = new MySQL();
        User user = new User(mySQL);
        Assertions.assertEquals(user.createUser(), "Row inserted!");
    }
}
