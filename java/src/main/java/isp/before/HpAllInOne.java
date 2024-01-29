package isp.before;

public class HpAllInOne implements AllInOne {
    @Override
    public String print() {
        return "Print done!";
    }

    @Override
    public String scan() {
        return "Scan done!";
    }

    @Override
    public String copy() {
        return "Copy done!";
    }

    @Override
    public String fax() {
        return "Fax done!";
    }
}
