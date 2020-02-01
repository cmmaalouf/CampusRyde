package com.example.campusryde;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

   public void signUp(View view)
    {
        setContentView(R.layout.activity_signup);
    }

    public void toLogin(View view)
    {
        setContentView(R.layout.activity_main);
    }

    public void next( View view)
    {

        Intent intent = new Intent(this, MapsActivity2.class);
        this.startActivity(intent);


    }
}
