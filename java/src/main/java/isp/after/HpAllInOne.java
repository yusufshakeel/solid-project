package isp.after;

public class HpAllInOne implements Print, Scan, Copy, Fax {

    @Override
    public String doCopy() {
        return "Copy done!";
    }

    @Override
    public String doFax() {
        return "Fax done!";
    }

    @Override
    public String doPrint() {
        return "Print done!";
    }

    @Override
    public String doScan() {
        return "Scan done!";
    }
}
