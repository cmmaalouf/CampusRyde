package com.example.campusryde;

import androidx.fragment.app.FragmentActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MapsActivity2 extends AppCompatActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps2);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        mMap.setMapType(GoogleMap.MAP_TYPE_HYBRID);
        mMap.setBuildingsEnabled(true);

        //mMap.setMaxZoomPreference(15);
        //mMap.setMinZoomPreference(12);

        // Add a marker in Sydney and move the camera
        LatLng hoya = new LatLng(35.271036, -84.932369);
        mMap.getMaxZoomLevel();
        mMap.addMarker(new MarkerOptions().position(hoya).title("Marker in Sydney"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(hoya,15));
    }

    public void createTrip(View view)
    {
        setContentView(R.layout.activity_settrip);
    }

    public void createTrip2(View view)
    {
        //capture date

        //capture time
        setContentView(R.layout.activity_settrip2);
    }

    public void cancelTrip(View view){
        Intent myintent = new Intent(this, MapsActivity2.class);
        this.startActivity(myintent);
    }

    public void backToDate(View view){
        setContentView(R.layout.activity_settrip);
    }

    public void submitTrip(View view){
        //capture address
        //capture num passengers
        //capture meet loc


        //firebase code to send everything to data base
        cancelTrip(view);
    }


}
