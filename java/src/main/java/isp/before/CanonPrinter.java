package isp.before;

public class CanonPrinter implements AllInOne {
    @Override
    public String print() {
        return "Print done!";
    }

    @Override
    public String scan() {
        // do nothing...
        return null;
    }

    @Override
    public String copy() {
        // do nothing...
        return null;
    }

    @Override
    public String fax() {
        // do nothing...
        return null;
    }
}
