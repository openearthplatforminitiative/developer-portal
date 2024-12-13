import io.openepi.soil.api.SoilApi;
import io.openepi.soil.model.*;
import io.openepi.common.ApiException;
import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        BigDecimal lon = new BigDecimal("9.58");
        BigDecimal lat = new BigDecimal("60.1");
        List<SoilDepthLabels> depths = List.of(SoilDepthLabels._0_5CM);
        List<SoilPropertiesCodes> properties = List.of(SoilPropertiesCodes.BDOD);
        List<SoilPropertyValueTypes> values = List.of(SoilPropertyValueTypes.MEAN);
        SoilApi api = new SoilApi();
        try {
            // Get the soil information for the bdod property
            SoilPropertyJSON response = api.getSoilPropertyPropertyGet(lon, lat, depths, properties, values);
            SoilLayer bdod = response.getProperties().getLayers().get(0);

            // Get the soil property unit and name
            SoilMappedUnits bdodUnit = bdod.getUnitMeasure().getMappedUnits();
            String bdodName = bdod.getName();

            // Get the soil property mean value at depth 0-5cm
            SoilDepthLabels bdodDepth = bdod.getDepths().get(0).getLabel();
            BigDecimal bdodValue = bdod.getDepths().get(0).getValues().getMean();

            System.out.println("Soil property: " + bdodName + ", Depht: " + bdodDepth + ", Value: " + bdodValue + " " + bdodUnit);
        } catch (ApiException e) {
            System.err.println("Exception when calling SoilApi#getSoilPropertyPropertyGet");
            e.printStackTrace();
        }
    }
}